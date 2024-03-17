interface Props {
  className: string;
}

/* @ts-expect-error */
export const Button: FC<Prop> = (props: Props) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
