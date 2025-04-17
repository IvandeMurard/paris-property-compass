
import React from 'react';
import { CircleMarker } from 'react-leaflet';
import { getScoreColor } from '@/utils/mapData';

interface AccessibilityCircleProps {
  lat: number;
  lng: number;
  score: number;
  accessibilityType: string;
  id: string;
}

const AccessibilityCircle: React.FC<AccessibilityCircleProps> = ({ 
  lat, 
  lng, 
  score,
  accessibilityType,
  id 
}) => {
  const color = getScoreColor(score);
  const position: [number, number] = [lat, lng];
  
  return (
    <CircleMarker
      center={position}
      pathOptions={{
        fillColor: color,
        fillOpacity: 0.3,
        color: color,
        weight: 1,
        radius: 30 // Move radius to pathOptions
      }}
    />
  );
};

export default AccessibilityCircle;
