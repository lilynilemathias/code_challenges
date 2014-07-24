class CourseStudent < ActiveRecord::Base
  self.table_name = :courses_students
  belongs_to :student
  belongs_to :course
end