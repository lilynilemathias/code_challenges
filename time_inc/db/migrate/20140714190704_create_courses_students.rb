class CreateCoursesStudents < ActiveRecord::Migration
  def change
    create_table :courses_students do |t|
      t.references :student, index: true
      t.references :course, index: true
    end
  end
end
