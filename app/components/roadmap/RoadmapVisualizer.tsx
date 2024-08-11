import React, { useState, useCallback } from 'react';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    Node,
    Edge,
    ConnectionLineType,
    NodeProps,
    useNodesState,
    useEdgesState,
} from 'react-flow-renderer';
import { useUser } from '@clerk/nextjs';

const initialNodes: Node[] = [
    {
        id: '1',
        type: 'custom',
        data: {
            label: 'Análisis de Requisitos',
            description: 'Comprender y documentar las necesidades del cliente.'
        },
        position: { x: 250, y: 0 },
    },
    // ... (añade los demás nodos con descripciones)
];

const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true, type: 'smoothstep' },
    // ... (añade las demás conexiones)
];

const CustomNode: React.FC<NodeProps> = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="bg-white p-4 rounded shadow-md cursor-pointer transition-all duration-300"
            style={{ width: isExpanded ? '300px' : '200px' }}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <h3 className="font-bold mb-2">{data.label}</h3>
            {isExpanded && <p className="text-sm">{data.description}</p>}
        </div>
    );
};

export const RoadmapVisualizer: React.FC = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const { isSignedIn } = useUser();

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const onNodeDragStop = useCallback(
        (event, node) => {
            if (isSignedIn) {
                // Aquí puedes implementar la lógica para guardar la nueva posición del nodo
                console.log('Node position updated:', node);
            }
        },
        [isSignedIn]
    );

    return (
        <div style={{ width: '100%', height: '70vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeDragStop={onNodeDragStop}
                nodeTypes={{ custom: CustomNode }}
                connectionLineType={ConnectionLineType.SmoothStep}
                snapToGrid={true}
                snapGrid={[15, 15]}
                defaultZoom={1.5}
                minZoom={0.5}
                maxZoom={2}
            >
                <Background color="#aaa" gap={16} />
                <Controls />
                <MiniMap />
            </ReactFlow>
            {isSignedIn && (
                <div className="mt-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            // Aquí puedes implementar la lógica para guardar los cambios en el roadmap
                            console.log('Roadmap saved:', nodes, edges);
                        }}
                    >
                        Guardar Cambios
                    </button>
                </div>
            )}
        </div>
    );
};