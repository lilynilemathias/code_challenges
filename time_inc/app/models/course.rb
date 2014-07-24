class Course < ActiveRecord::Base
  has_many :course_students
  has_many :students, through: :course_students
  validates_presence_of :subject, :period
  validate(:validates_period_range)
  def validates_period_range
    if (1..8).to_a.include?(self.period)
      return true
    else
      self.errors.add(:period, "Period must be within 1st-8th hours")
    end
  end
end
