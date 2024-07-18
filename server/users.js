const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  if (!name || !room) return { error: 'Username and room are required.' };
  if (existingUser) return { error: 'Username is taken.' };

  const user = { id, name, room };
  users.push(user);

  console.log('User added:', user);
  console.log('Current users:', users);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    const removedUser = users.splice(index, 1)[0];
    console.log('User removed:', removedUser);
    console.log('Current users:', users);
    return removedUser;
  }
};

const getUser = (id) => {
  const user = users.find((user) => user.id === id);
  console.log('Get user:', user);
  return user;
};

const getUsersInRoom = (room) => {
  const usersInRoom = users.filter((user) => user.room === room);
  console.log(`Users in room ${room}:`, usersInRoom);
  return usersInRoom;
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };

