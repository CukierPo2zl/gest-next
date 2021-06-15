import { useState } from "react";
import { Sheet } from "../spreadsheet/sheet/Sheet";

export const Demo = ({ regCallback }) => {
    const [demoData, setDemoData] = useState({
        data:
            [
                [
                    {
                        "value": "",
                        "readOnly": true
                    },
                    {
                        "value": "y",
                        "readOnly": true
                    },
                    {
                        "value": "x",
                        "readOnly": true
                    },
                    {
                        "value": "C",
                        "readOnly": true
                    },
                    {
                        "value": "D",
                        "readOnly": true
                    },
                    {
                        "value": "E",
                        "readOnly": true
                    },
                    {
                        "value": "F",
                        "readOnly": true
                    },
                    {
                        "value": "G",
                        "readOnly": true
                    },
                    {
                        "value": "H",
                        "readOnly": true
                    },
                    {
                        "value": "I",
                        "readOnly": true
                    }
                ],
                [
                    {
                        "value": 1,
                        "readOnly": true
                    },
                    {
                        "value": "1"
                    },
                    {
                        "value": "15"
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 2,
                        "readOnly": true
                    },
                    {
                        "value": "2"
                    },
                    {
                        "value": "23"
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 3,
                        "readOnly": true
                    },
                    {
                        "value": "3"
                    },
                    {
                        "value": "45"
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 4,
                        "readOnly": true
                    },
                    {
                        "value": "4"
                    },
                    {
                        "value": "48"
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 5,
                        "readOnly": true
                    },
                    {
                        "value": "5"
                    },
                    {
                        "value": "56"
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 6,
                        "readOnly": true
                    },
                    {
                        "value": "6"
                    },
                    {
                        "value": "85"
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 7,
                        "readOnly": true
                    },
                    {
                        "value": "7"
                    },
                    {
                        "value": "111"
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 8,
                        "readOnly": true
                    },
                    {
                        "value": "8"
                    },
                    {
                        "value": "123"
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 9,
                        "readOnly": true
                    },
                    {
                        "value": "9"
                    },
                    {
                        "value": "167"
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 10,
                        "readOnly": true
                    },
                    {
                        "value": "10"
                    },
                    {
                        "value": "230"
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 11,
                        "readOnly": true
                    },
                    {
                        "value": "16"
                    },
                    {
                        "value": "54"
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 12,
                        "readOnly": true
                    },
                    {
                        "value": "18"
                    },
                    {
                        "value": "564"
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 13,
                        "readOnly": true
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 14,
                        "readOnly": true
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 15,
                        "readOnly": true
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ],
                [
                    {
                        "value": 16,
                        "readOnly": true
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {}
                ]
            ]
        , tools: [
            "KMNK",
            "DurbinWatson",
            "GoldfeldQuandt",
            "HarrisonMcCabe",
            "JarqueBer"
        ], outputs: [
            // {
            //     "output_data": {
            //         "a0": 361.68301886792455,
            //         "a1": -4.915094339622642
            //     },
            //     "tool_handle": "KMNK"
            // }, 


            {
                "output_data": {
                    "a0": -30.79994534025695,
                    "a1": 21.242689259360485,
                    "graph": [
                        {
                            "data": [
                                [
                                    1,
                                    15
                                ],
                                [
                                    2,
                                    23
                                ],
                                [
                                    3,
                                    45
                                ],
                                [
                                    4,
                                    48
                                ],
                                [
                                    5,
                                    56
                                ],
                                [
                                    6,
                                    85
                                ],
                                [
                                    7,
                                    111
                                ],
                                [
                                    8,
                                    123
                                ],
                                [
                                    9,
                                    167
                                ],
                                [
                                    10,
                                    230
                                ],
                                [
                                    16,
                                    54
                                ],
                                [
                                    18,
                                    564
                                ]
                            ]
                        },
                        {
                            "data": [
                                [
                                    1,
                                    [
                                        -9.557256080896469
                                    ]
                                ],
                                [
                                    2,
                                    [
                                        11.685433178464017
                                    ]
                                ],
                                [
                                    3,
                                    [
                                        32.9281224378245
                                    ]
                                ],
                                [
                                    4,
                                    [
                                        54.17081169718499
                                    ]
                                ],
                                [
                                    5,
                                    [
                                        75.41350095654548
                                    ]
                                ],
                                [
                                    6,
                                    [
                                        96.65619021590597
                                    ]
                                ],
                                [
                                    7,
                                    [
                                        117.89887947526644
                                    ]
                                ],
                                [
                                    8,
                                    [
                                        139.14156873462693
                                    ]
                                ],
                                [
                                    9,
                                    [
                                        160.3842579939874
                                    ]
                                ],
                                [
                                    10,
                                    [
                                        181.6269472533479
                                    ]
                                ],
                                [
                                    16,
                                    [
                                        309.0830828095108
                                    ]
                                ],
                                [
                                    18,
                                    [
                                        351.56846132823176
                                    ]
                                ]
                            ]
                        }
                    ],
                    "Razem SS": 251908.25,
                    "R kwadrat": 0.5462076331568841,
                    "Phi kwadrat": 0.45379236684311586,
                    "Regresja SS": 137594.20900519268,
                    "Resztkowy SS": 114314.04099480732,
                    "Wielokrotnosc R": 0.7390586128020458,
                    "Błąd stanardowy": 106.91774454916607,
                    "Dopasowany R kwadrat": 0.5008283964725726,
                    "Odchyelnie standardowe X": 5.040805711612204,
                    "Odchylenie standardowe Y": 144.88738442896494
                },
                "tool_handle": "LinearRegression"
            },
            {
                "output_data": {
                    "expl": "Wystepuje autokorelacja dodatnia",
                    "DW_coefficient": 2.8709512356876643
                },
                "tool_handle": "DurbinWatson"
            },
            // {
            //     "output_data": {
            //         "F": 4.9503,
            //         "GQ": 2.076889588300213,
            //         "expl": "Wystepuje homoskedastycznosc"
            //     },
            //     "tool_handle": "GoldfeldQuandt"
            // },
            // {
            //     "output_data": {
            //         "b": 0.32500353727428904,
            //         "bL": 0.11073583965450418,
            //         "bU": 0.30124111338715504,
            //         "expl": "Wystepuje homoskedastycznosc"
            //     },
            //     "tool_handle": "HarrisonMcCabe"
            // },
            {
                "output_data": {
                    "X": 5.991465,
                    "JB": 0.8281040655366467,
                    "expl": "Skladnik losowy ma rozklad normalny"
                },
                "tool_handle": "JarqueBer"
            }
        ]
    });

    const handleDeleteSpreadsheet = (pk) => {
    }

    const handleOnChange = (data, tools, outputs, pk) => {
        regCallback()
        // setDemoData({ data: data, tools: tools, outputs: outputs })
    }
    return (
        <div className="demo-sheet">
            <Sheet
                pk={0}
                data={demoData.data}
                tools={demoData.tools}
                outputs={demoData.outputs}
                onDeleteSpreadsheet={handleDeleteSpreadsheet}
                onChange={handleOnChange}
            />
        </div>
    );
}

