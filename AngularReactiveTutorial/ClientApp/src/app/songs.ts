import { INote, main, Pitch, bass, drum, hihat, snare } from './player/audio-player.service';

export const rockSong: INote[][] = [
    [main(Pitch.D, 1 / 8), main(Pitch.G, 1 / 8), bass(Pitch.G, 1 / 8), drum(), hihat()]
    , [bass(Pitch.G, 1 / 8), drum(), hihat()]
    , [main(Pitch.F, 1 / 8), main(Pitch.As, 1 / 8), bass(Pitch.G, 1 / 8), snare(), hihat()]
    , [bass(Pitch.G, 1 / 8), hihat()]
    , [main(Pitch.G, 1 / 4), main(Pitch.C, 1 / 4), bass(Pitch.G, 1 / 8), drum(), hihat()]
    , [bass(Pitch.G, 1 / 8), hihat()]
    , [main(Pitch.G, 1 / 16), bass(Pitch.G, 1 / 8), snare(), hihat()]
    , [main(Pitch.D, 1 / 8), main(Pitch.G, 1 / 8), bass(Pitch.G, 1 / 8), hihat()]
    , [bass(Pitch.G, 1 / 8), drum(), hihat()]
    , [main(Pitch.F, 1 / 8), main(Pitch.As, 1 / 8), bass(Pitch.G, 1 / 8), drum(), hihat()]
    , [bass(Pitch.G, 1 / 8), snare(), hihat()]
    , [main(Pitch.Gs, 1 / 8), main(Pitch.Cs, 1 / 8), bass(Pitch.G, 1 / 8), hihat()]
    , [main(Pitch.G, 1 / 4), main(Pitch.C, 1 / 4), bass(Pitch.G, 1 / 8), drum(), hihat()]
    , [bass(Pitch.G, 1 / 8), hihat()]
    , [main(Pitch.G, 1 / 16), bass(Pitch.G, 1 / 8), snare(), hihat()]
    , [bass(Pitch.G, 1 / 8), hihat()]
    , [main(Pitch.D, 1 / 8), main(Pitch.G, 1 / 8), bass(Pitch.G, 1 / 8), drum(), hihat()]
    , [bass(Pitch.G, 1 / 8), drum(), hihat()]
    , [main(Pitch.F, 1 / 8), main(Pitch.As, 1 / 8), bass(Pitch.G, 1 / 8), snare(), hihat()]
    , [bass(Pitch.G, 1 / 8), hihat()]
    , [main(Pitch.G, 1 / 8), main(Pitch.C, 1 / 8), bass(Pitch.C, 1 / 8), drum(), hihat()]
    , [bass(Pitch.C, 1 / 8), hihat()]
    , [main(Pitch.G, 1 / 16), bass(Pitch.C, 1 / 8), snare(), hihat()]
    , [main(Pitch.F, 1 / 8), main(Pitch.As, 1 / 8), bass(Pitch.As, 1 / 4), hihat()]
    , [drum(), hihat()]
    , [main(Pitch.D, 5 / 8), main(Pitch.G, 5 / 8), bass(Pitch.G, 1 / 8), drum(), hihat()]
    , [bass(Pitch.G, 1 / 8), snare(), hihat()]
    , [bass(Pitch.G, 1 / 8), hihat()]
    , [bass(Pitch.G, 1 / 8), drum(), hihat()]
    , [bass(Pitch.G, 1 / 8), snare(), hihat()]
    , [main(Pitch.G, 1 / 16), bass(Pitch.F, 1 / 8), snare(), hihat()]
    , [bass(Pitch.Fs, 1 / 8), snare(), hihat()]
];
export const song: INote[][] = [
    [main(Pitch.A, 1 / 8), ],
    [main(Pitch.B, 1 / 8), ],
    [main(Pitch.D + 12, 1 / 8), ],
    [main(Pitch.B, 1 / 8), ],
    [main(Pitch.Fs + 12, 1 / 4), ], [], [],
    [main(Pitch.Fs + 12, 1 / 4), ], [], [],
    [main(Pitch.E + 12, 3 / 4), ], [], [], [], [], [],

    [main(Pitch.A, 1 / 8),  ],
    [main(Pitch.B, 1 / 8), ],
    [main(Pitch.D + 12, 1 / 4), ],
    [main(Pitch.B, 1 / 8), ],
    [main(Pitch.E + 12, 1 / 4), ], [], [],
    [main(Pitch.E + 12,  1 / 4), ], [], [],
    [main(Pitch.D + 12,  1 / 4), ], [], [],
    [main(Pitch.Cs + 12, 1 / 4), ],
    [main(Pitch.B, 3 / 4), ], [],

    [main(Pitch.A, 1 / 8), ],
    [main(Pitch.B, 1 / 8), ],
    [main(Pitch.D + 12, 1 / 4), ],
    [main(Pitch.B, 1 / 8), ],
    [main(Pitch.D + 12, 3 / 4), ], [], [],
    [main(Pitch.E + 12, 1 / 4), ], [], [],
    [main(Pitch.Cs + 12, 1 / 4), ], [],
    [main(Pitch.B , 1 / 8), ], [],
    [main(Pitch.A, 1 / 2), ], [], [], [],
    [main(Pitch.A, 1 / 4), ], [],
    [main(Pitch.E + 12, 1 / 2), ], [], [], [],
    [main(Pitch.D + 12, 2), ], [], [], [], [], [], [], [],

    [main(Pitch.A, 1 / 8), ],
    [main(Pitch.B, 1 / 8), ],
    [main(Pitch.D + 12, 1 / 8), ],
    [main(Pitch.B, 1 / 8), ],
    [main(Pitch.Fs + 12, 1 / 4), ], [], [],
    [main(Pitch.Fs + 12, 1 / 4), ], [], [],
    [main(Pitch.E + 12, 3 / 4), ], [], [], [], [], [],

    [main(Pitch.A, 1 / 8),  ],
    [main(Pitch.B, 1 / 8), ],
    [main(Pitch.D + 12, 1 / 4), ],
    [main(Pitch.B, 1 / 8), ],
    [main(Pitch.A + 12, 1 / 4), ], [], [],
    [main(Pitch.Cs + 12,  1 / 4), ], [], [],
    [main(Pitch.D + 12,  1 / 4), ], [], [],
    [main(Pitch.Cs + 12, 1 / 4), ],
    [main(Pitch.B, 3 / 4), ], [],

    [main(Pitch.A, 1 / 8), ],
    [main(Pitch.B, 1 / 8), ],
    [main(Pitch.D + 12, 1 / 4), ],
    [main(Pitch.B, 1 / 8), ],
    [main(Pitch.D + 12, 3 / 4), ], [], [],
    [main(Pitch.E + 12, 1 / 4), ], [], [],
    [main(Pitch.Cs + 12, 1 / 4), ], [],
    [main(Pitch.B , 1 / 8), ], [],
    [main(Pitch.A, 1 / 2), ], [], [], [],
    [main(Pitch.A, 1 / 4), ], [],
    [main(Pitch.E + 12, 1 / 2), ], [], [], [],
    [main(Pitch.D + 12, 2), ], [], [], [], [], [], [], [],
];
