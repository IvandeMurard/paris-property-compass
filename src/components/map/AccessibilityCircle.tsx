
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
  
  return (
    <CircleMarker
      center={[lat, lng]}
      pathOptions={{
        fillColor: color,
        fillOpacity: 0.3,
        color: color,
        weight: 1,
        radius: 30
      }}
    />
  );
};

export default AccessibilityCircle;
