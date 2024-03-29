import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component: any) => {
    const With
  return (props: any) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return;
    <Component
      {...props} // pass down all props to the wrapped component
      location={location}
      navigate={navigate}
      params={params}
    />;
  }
  return withRouter;
}

export default withRouter;
