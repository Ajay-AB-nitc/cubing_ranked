type RenderCubie = {
    id: string
    position: [number, number, number]
    stickers: {
        U?: string
        D?: string
        L?: string
        R?: string
        F?: string
        B?: string
    }
}

const cubies: RenderCubie[] = [
    // Corners
    {
        id: "URF",
        position: [1, 1, 1],
        stickers: { U: "white", R: "red", F: "green" }
    },
    {
        id: "UFL",
        position: [-1, 1, 1],
        stickers: { U: "white", F: "green", L: "orange" }
    },
    {
        id: "ULB",
        position: [-1, 1, -1],
        stickers: { U: "white", L: "orange", B: "blue" }
    },
    {
        id: "UBR",
        position: [1, 1, -1],
        stickers: { U: "white", B: "blue", R: "red" }
    },
    {
        id: "DFR",
        position: [1, -1, 1],
        stickers: { D: "yellow", F: "green", R: "red" }
    },
    {
        id: "DLF",
        position: [-1, -1, 1],
        stickers: { D: "yellow", L: "orange", F: "green" }
    },
    {
        id: "DBL",
        position: [-1, -1, -1],
        stickers: { D: "yellow", B: "blue", L: "orange" }
    },
    {
        id: "DRB",
        position: [1, -1, -1],
        stickers: { D: "yellow", R: "red", B: "blue" }
    },

    // Edges
    { id: "UR", position: [1, 1, 0], stickers: { U: "white", R: "red" } },
    { id: "UF", position: [0, 1, 1], stickers: { U: "white", F: "green" } },
    { id: "UL", position: [-1, 1, 0], stickers: { U: "white", L: "orange" } },
    { id: "UB", position: [0, 1, -1], stickers: { U: "white", B: "blue" } },

    { id: "DR", position: [1, -1, 0], stickers: { D: "yellow", R: "red" } },
    { id: "DF", position: [0, -1, 1], stickers: { D: "yellow", F: "green" } },
    { id: "DL", position: [-1, -1, 0], stickers: { D: "yellow", L: "orange" } },
    { id: "DB", position: [0, -1, -1], stickers: { D: "yellow", B: "blue" } },

    { id: "FR", position: [1, 0, 1], stickers: { F: "green", R: "red" } },
    { id: "FL", position: [-1, 0, 1], stickers: { F: "green", L: "orange" } },
    { id: "BL", position: [-1, 0, -1], stickers: { B: "blue", L: "orange" } },
    { id: "BR", position: [1, 0, -1], stickers: { B: "blue", R: "red" } },

    // Centers
    { id: "U", position: [0, 1, 0], stickers: { U: "white" } },
    { id: "D", position: [0, -1, 0], stickers: { D: "yellow" } },
    { id: "L", position: [-1, 0, 0], stickers: { L: "orange" } },
    { id: "R", position: [1, 0, 0], stickers: { R: "red" } },
    { id: "F", position: [0, 0, 1], stickers: { F: "green" } },
    { id: "B", position: [0, 0, -1], stickers: { B: "blue" } },
]



function Cubie({ cubie }: { cubie: RenderCubie }) {
    const s = cubie.stickers

    const materials = [
        s.R ?? "black", // +X
        s.L ?? "black", // -X
        s.U ?? "black", // +Y
        s.D ?? "black", // -Y
        s.F ?? "black", // +Z
        s.B ?? "black", // -Z
    ]

    return (
        <mesh position={cubie.position}>
            <boxGeometry args={[0.95, 0.95, 0.95]} />
            {materials.map((color, i) => (
                <meshStandardMaterial
                    key={i}
                    attach={`material-${i}`}
                    color={color}
                />
            ))}
        </mesh>
    )
}

export default function RubiksCube() {
    return (
        <>
            {cubies.map((cubie) => (
                <Cubie key={cubie.id} cubie={cubie} />
            ))}
        </>
    )
}