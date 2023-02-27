import { useRecoilValue } from "recoil";
import { userRoleState } from "../recoil/atoms";

const Dashboard = () => {
  const userRole = useRecoilValue(userRoleState);

  return (
    <>
      <div>
        <h2>This is the Dashboard</h2>
        <p>Admin Name : {userRole.name}</p>
      </div>
    </>
  );
};

export default Dashboard;
