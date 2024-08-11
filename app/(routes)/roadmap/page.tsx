'use client';
import React from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import Flow from './App';
import NodeAsHandleFlow from "./App"; // Asegúrate de que la ruta sea correcta

const RoadmapPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Roadmap de Desarrollo de Software</h1>
            <div style={{ width: '100%', height: '80vh' }}>
                <ReactFlowProvider>
                    <NodeAsHandleFlow />
                </ReactFlowProvider>
            </div>
        </div>
    );
};

export default RoadmapPage;
