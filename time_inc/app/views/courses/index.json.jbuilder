json.array!(@courses) do |course|
  json.extract! course, :id, :subject, :period, :student_id_id
  json.url course_url(course, format: :json)
end
