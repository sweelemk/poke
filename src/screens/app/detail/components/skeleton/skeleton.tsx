import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type SkeletonProps = {
  height: number;
}

const Skeleton: React.FC<SkeletonProps> = ({height}) => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item width="100%" height={height} />
    </SkeletonPlaceholder>
  );
};

export default Skeleton;
