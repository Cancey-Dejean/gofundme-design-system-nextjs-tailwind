type Props = {
  number: number;
};

const CircleNumber = ({ number = 1 }: Props) => {
  return (
    <strong className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 text-heading-two text-white">
      {number}
    </strong>
  );
};

export default CircleNumber;
