import { useSelector } from 'react-redux';
import { getUsers } from 'redux/users/usersSelectors';
import { useDispatch } from 'react-redux';
import { deleteUser, updateStatus } from 'redux/users/usersSlice';
export const HomePage = () => {
  const users = useSelector(getUsers);

  const dispatch = useDispatch();

  const element = users.map(({ id, name, age, status }) => {
    return (
      <li key={id}>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p onClick={() => dispatch(updateStatus(id))}>Status : {status}</p>
        <button type="button" onClick={() => dispatch(deleteUser(id))}>
          Delete
        </button>
      </li>
    );
  });

  return (
    <>
      <div>Home</div>
      <ul>{element}</ul>
    </>
  );
};
