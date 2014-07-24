class AddGradeToCoursesStudents < ActiveRecord::Migration
  def change
    add_column :courses_students, :grade, :string
  end
end
