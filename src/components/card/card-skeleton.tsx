import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const CardSkeleton: React.FC = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item width="100%" height={274} borderRadius={24} />
    </SkeletonPlaceholder>
  );
};

export default CardSkeleton;
