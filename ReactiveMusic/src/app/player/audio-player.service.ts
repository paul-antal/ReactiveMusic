import * as WebAudioFontPlayer from 'webaudiofont';

export class AudioPlayer {
    readonly bpm = 120;
    readonly N = 4 * 60 / this.bpm;
    readonly instrumentIndex = 3;
    readonly bassIndex = 367;
    readonly drumIndex = 26;
    readonly hihatIndex = 57;
    readonly snareIndex = 18;
    player: IWebAudioFontPlayer;
    audioContext: IWebAudioContext;
    private get startTime(): number {
        return this.audioContext.currentTime + 0.1;
    }
    private band: any = {};
    constructor() {
        const AudioContextFunc = this.AudioWindow.AudioContext || (window as any).webkitAudioContext;
        this.audioContext = new AudioContextFunc();
        this.player = new WebAudioFontPlayer();
        const mainInfo = this.player.loader.instrumentInfo(this.instrumentIndex);
        this.loadInstrument(mainInfo, () => this.band.main = this.AudioWindow[mainInfo.variable]);
        const bassInfo = this.player.loader.instrumentInfo(this.bassIndex);
        this.loadInstrument(bassInfo, () => this.band.bass = this.AudioWindow[bassInfo.variable]);
        const drumInfo = this.player.loader.drumInfo(this.drumIndex);
        this.loadInstrument(drumInfo, () => this.band.drum = this.AudioWindow[drumInfo.variable]);
        const hihatInfo = this.player.loader.drumInfo(this.hihatIndex);
        this.loadInstrument(hihatInfo, () => this.band.hihat = this.AudioWindow[hihatInfo.variable]);
        const snareInfo = this.player.loader.drumInfo(this.snareIndex);
        this.loadInstrument(snareInfo, () => this.band.snare = this.AudioWindow[snareInfo.variable]);
    }

    play = (notes: INote[]) => {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i]) {
                const note = notes[i];
                switch (note.instrument) {
                    case 'main': this.main(note.pitch, note.duration); break;
                    case 'bass': this.bass(note.pitch, note.duration); break;
                    case 'drum': this.drum(); break;
                    case 'hihat': this.hihat(); break;
                    case 'snare': this.snare(); break;
                }
            }
        }
    }

    private playNote(noteDefinition: INoteDefinition) {
        this.player.queueWaveTable(
            this.audioContext,
            this.audioContext.destination,
            noteDefinition.preset,
            this.startTime,
            noteDefinition.pitch,
            noteDefinition.duration,
            noteDefinition.volume);
    }
    private loadInstrument(info: IInstrumentInfo, callBack: () => void) {
        this.player.loader.startLoad(this.audioContext, info.url, info.variable);
        this.player.loader.waitLoad(callBack);
    }

    private get AudioWindow(): IAudioWindow {
        return window as any;
    }
    private main(pitch: Pitch, duration: number) {
        this.playNote({
            preset: this.band.main,
            pitch: 12 * 4 + pitch,
            duration: duration * this.N,
            volume: 0.25
        });
    }
    private bass(pitch: Pitch, duration: number) {
        this.playNote({
            preset: this.band.bass,
            pitch: 12 * 2 + pitch,
            duration: duration * this.N,
            volume: 0.4
        });
    }
    private drum() {
        this.playNote({
            preset: this.band.drum,
            pitch: 36,
            duration: 1,
            volume: 0.3
        });
    }
    private snare() {
        this.playNote({
            preset: this.band.snare,
            pitch: 38,
            duration: 1,
            volume: 0.85
        });
    }
    private hihat() {
        this.playNote({
            preset: this.band.hihat,
            pitch: 42,
            duration: 1,
            volume: 0.25
        });
    }

}

export function main(pitch: number, duration: number): INote {
    return {
        instrument: 'main',
        pitch, duration
    };
}

export function bass(pitch: number, duration: number): INote {
    return {
        instrument: 'bass',
        pitch, duration
    };
}

export function hihat(): INote {
    return { instrument: 'hihat' };
}

export function snare(): INote {
    return { instrument: 'snare' };
}

export function drum(): INote {
    return { instrument: 'drum' };
}

export interface INote {
    instrument: 'main' | 'bass' | 'drum' | 'snare' | 'hihat';
    pitch?: Pitch;
    duration?: number;
}

interface INoteDefinition {
    preset: any;
    pitch: number;
    duration: number;
    volume: number;

}

interface IAudioWindow {
    AudioContext: () => IWebAudioContext;
    webkitAudioContext: () => IWebAudioContext;
}

interface IWebAudioContext {
    destination: any;
    currentTime: number;
}
interface IWebAudioFontPlayer {
    loader: IWebAudioFontLoader;
    queueWaveTable(
        audioContext: IWebAudioContext,
        destination: any,
        preset: any,
        time: number,
        pitch: number,
        duration: number,
        volume: number);
}

interface IWebAudioFontLoader {
    instrumentInfo(index): IInstrumentInfo;
    drumInfo(index): IInstrumentInfo;
    startLoad(audioContext: IWebAudioContext, url: string, variable: string);
    waitLoad(callBack: () => void);
}

interface IInstrumentInfo {
    url: string;
    variable: string;
}

export enum Pitch {
    C = 0,
    Cs = 1,
    D = 2,
    Ds = 3,
    E = 4,
    F = 5,
    Fs = 6,
    G = 7,
    Gs = 8,
    A = 9,
    As = 10,
    B = 11,
}
