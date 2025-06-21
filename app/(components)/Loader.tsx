import { Grid } from "react-loader-spinner";

export default function Loader() {
  return (
    <Grid
      visible={true}
      height="80"
      width="80"
      color="#7c3aed"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass="grid-wrapper"
    />
  );
}
