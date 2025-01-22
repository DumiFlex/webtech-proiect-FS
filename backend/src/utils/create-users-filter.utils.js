export default function createUsersFilter(params) {
  const {
    first_name,
    last_name,
    username,
    email,
    status,
    user_type,
    gender,
    search,
  } = params;

  const validGenders = ["male", "female"];
  const validStatuses = ["active", "inactive", "banned"];
  const validUserTypes = ["student", "professor", "admin"];

  const filter = {};

  first_name && (filter.first_name = { [Op.iLike]: `%${first_name}%` });
  last_name && (filter.last_name = { [Op.iLike]: `%${last_name}%` });
  username && (filter.username = { [Op.iLike]: `%${username}%` });
  email && (filter.email = { [Op.iLike]: `%${email}%` });
  status && (filter.status = { [Op.eq]: status });
  user_type && (filter.user_type = { [Op.eq]: user_type });
  gender && (filter.gender = { [Op.eq]: gender });

  if (search) {
    filter[Op.or] = [
      { first_name: { [Op.iLike]: `%${search}%` } },
      { last_name: { [Op.iLike]: `%${search}%` } },
      { username: { [Op.iLike]: `%${search}%` } },
      { email: { [Op.iLike]: `%${search}%` } },
    ];

    if (validGenders.includes(search)) {
      filter[Op.or].push({ gender: { [Op.eq]: search } });
    }

    if (validStatuses.includes(search)) {
      filter[Op.or].push({ status: { [Op.eq]: search } });
    }

    if (validUserTypes.includes(search)) {
      filter[Op.or].push({ user_type: { [Op.eq]: search } });
    }
  }

  return filter;
}
