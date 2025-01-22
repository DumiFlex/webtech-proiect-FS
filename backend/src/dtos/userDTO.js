export function toUserResponseDTO(user) {
  return {
    _id: user._id,
    first_name: user.first_name,
    last_name: user.last_name,
    username: user.username,
    email: user.email,
    gender: user.gender,
    profile_picture: user.profile_picture,
    account_type: user.account_type,
    status: user.status,
  };
}
