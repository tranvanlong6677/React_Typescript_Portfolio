import { useState } from "react";
import "./Video10.css";
export interface IUser {
  name: string;
  age: number | string;
  city: string;
}
interface IProps {
  defaultName: string;
  defaultAge: number | string;
}
const Video10 = (props: IProps) => {
  const { defaultName, defaultAge } = props;
  const [name, setName] = useState<string>(defaultName);
  const [age, setAge] = useState<number | string>(defaultAge);
  const [cityUser, setCityUser] = useState<string>("Hà Nội");
  const [city, setCity] = useState<string[]>([
    "Hà Nội",
    "Đà Nẵng",
    "Hồ Chí Minh",
  ]);

  const [users, setUsers] = useState<(IUser | null)[]>([]);

  const handleSubmitForm = () => {
    let userNew: IUser = { name: name, age: age, city: cityUser };
    setUsers([...users, userNew]);
    setName("");
    setAge("");
  };
  const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

  return (
    <>
      <div>Example video 10: hello world </div>
      <div className="form-user">
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <br />
        </div>
        <div>
          <label>Age:</label>
          <br />
          <input
            type="number"
            value={age}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAge(+e.target.value)
            }
          />
          <br />
        </div>
        <div>
          <label>City:</label>
          <br />
          <select
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCityUser(e.target.value);
            }}
          >
            {city.map((item: any, index: number) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>

        <input
          type="submit"
          value="Submit"
          onClick={() => handleSubmitForm()}
        />
      </div>
      <hr />
      <div>List Users:</div>
      <div className="table-user">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item: any, index: number) => {
              return (
                <tr key={`user${index}`}>
                  <td>{item?.name}</td>
                  <td>{item?.age}</td>
                  <td>{item?.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Video10;
