class Student < ActiveRecord::Base
  has_many :course_students
  has_many :courses, through: :course_students
  validates_presence_of :first_name, :last_name, :unique_id
  validates_uniqueness_of :unique_id
end
