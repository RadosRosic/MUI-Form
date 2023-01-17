import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Moment from "react-moment";

const tableHeadArr = [
  "Name",
  "Gender",
  "Date of Birth",
  "Nationality",
  "Mobile Phone",
];

const InfoTable = ({ users }) => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeadArr.map((item, i) => (
              <TableCell key={item + i}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user, i) => (
            <TableRow key={user + i}>
              <TableCell>
                {`${user?.title} ${user?.firstName} ${user?.lastName}`}
              </TableCell>
              <TableCell>{user?.gender}</TableCell>
              <TableCell>
                <Moment format="DD/MM/YYYY">{user?.birthday}</Moment>
              </TableCell>
              <TableCell>{user?.nationality}</TableCell>
              <TableCell>{user?.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default InfoTable;
