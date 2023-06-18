import NavigationHeader from "./Header";

export default function Main(props: any) {
  return (
    <>
      <NavigationHeader />
      <>{props.children}</>
    </>
  );
}
