


const cornerPositions = {
    URF: [1,1,1],
    UFL: [-1,1,1],
    ULB: [-1,1,-1],
    UBR: [1,1,-1],
    DFR: [1,-1,1],
    DLF: [-1,-1,1],
    DBL: [-1,-1,-1],
    DRB: [1,-1,-1],
}

const edgePositions = {
  UR: [1, 1, 0],
  UF: [0, 1, 1],
  UL: [-1, 1, 0],
  UB: [0, 1, -1],

  DR: [1, -1, 0],
  DF: [0, -1, 1],
  DL: [-1, -1, 0],
  DB: [0, -1, -1],

  FR: [1, 0, 1],
  FL: [-1, 0, 1],
  BL: [-1, 0, -1],
  BR: [1, 0, -1],
} as const;

const centers = {
  U: [0, 1, 0],
  D: [0, -1, 0],
  L: [-1, 0, 0],
  R: [1, 0, 0],
  F: [0, 0, 1],
  B: [0, 0, -1],
} as const;

const cubies = [
  ...Object.entries(cornerPositions).map(([id, position]) => ({
    id,
    position,
  })),
  ...Object.entries(edgePositions).map(([id, position]) => ({
    id,
    position,
  })),
  ...Object.entries(centers).map(([id, position]) => ({
    id,
    position,
  })),
];

function Cubie({
    position
}: {
    position: [number, number, number]
}) {
    return (
        <mesh position={position}>
            <boxGeometry args={[0.95,0.95,0.95]} />
            {[
                "red",
                "orange",
                "white",
                "yellow",
                "green",
                "blue"
            ].map((color, i) => (
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
      {cubies.map((c) => (
        <Cubie
          key={c.id}
          position={c.position as [number, number, number]}
        />
      ))}
    </>
  );
}