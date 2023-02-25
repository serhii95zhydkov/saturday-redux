import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser} from 'redux/users/usersSlice';

export const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'age':
        setAge(value);
        break;
      default:
        break;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const newUser = {
      id: nanoid(),
      name,
      age,
      status: 'offline',
    };
    dispatch(addUser(newUser));
    navigate('/');
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Age
          <input type="text" name="age" value={age} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
};
