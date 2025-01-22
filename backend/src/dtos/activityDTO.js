export function toActivityResponseDTO(activity) {
  return {
    _id: activity._id,
    title: activity.title,
    description: activity.description,
    start_date: activity.start_date,
    end_date: activity.end_date,
    access_code: activity.access_code,
    status: activity.status,
  };
}
