// temporary override to get by type-error from react-spring animated having children props
import reactSpring from "@react-spring/web";
declare module "@react-spring/web" {
  const animated = {
    children: React.ReactNode,
    ...reactSpring.animated,
  };
}
