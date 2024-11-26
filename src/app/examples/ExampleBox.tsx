import { Box } from '@/components';
import { BoxProps } from '@/components/Box';

const SIZES = {
  sm: '25px',
  md: '50px',
  lg: '150px',
};

export function ExampleBox({
  size = 'md',
  width,
  height,
  borderRadius = '2',
  borderSize = '1',
  color,
  ...props
}: { size?: keyof typeof SIZES } & BoxProps) {
  return (
    <Box
      {...props}
      width={width || SIZES[size]}
      height={height || SIZES[size]}
      borderRadius={borderRadius}
      borderSize={borderSize}
    />
  );
}
