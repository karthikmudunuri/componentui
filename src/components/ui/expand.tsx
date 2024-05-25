// components/ExpandableComponent.tsx
"use client"

// components/ExpandableComponent.tsx

// components/ExpandableComponent.tsx

import { useState } from 'react';
import { Button } from './Button';

interface ExpandableComponentProps {
    children: React.ReactNode;
}

const ExpandableComponent: React.FC<ExpandableComponentProps> = ({ children }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`relative ${expanded ? 'h-auto overflow-y-visible' : 'h-100 overflow-y-hidden'}`}>
            <div className={`component ${expanded ? 'expanded' : ''}`} style={{ maxHeight: expanded ? 'none' : '300px' }}>
                <div className="content ">
                    {children}
                </div>
            </div>
            {!expanded && (
                <Button
                   variant={'secondary'}
                    onClick={toggleExpand}
                    className='absolute bottom-0 left-0 right-0 text-center px-16 border-2  border-gray-200 '
                >
                    Expand
                </Button>
            )}
        </div>
    );
};

export default ExpandableComponent;

