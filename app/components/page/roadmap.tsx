import React from 'react';
import { RoadmapVisualizer } from '../roadmap/RoadmapVisualizer';

const RoadmapPage: React.FC = () => {
    return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Roadmap de Desarrollo de Software</h1>
                <RoadmapVisualizer />
            </div>
    );
};

export default RoadmapPage;