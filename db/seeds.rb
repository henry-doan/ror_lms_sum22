@ctypes = ['Cooking', 'CS', 'Math', 'Writing']
@roles = ['teacher', 'ta', 'student']

Enrollment.delete_all
Course.delete_all 
User.delete_all

10.times do
  @course = Course.create(
    title: Faker::Educator.course_name,
    desc: Faker::Lorem.paragraph,
    ctype: @ctypes.sample
  )

  5.times do
    @user = User.create(
      first: Faker::FunnyName.name,
      last: Faker::Job.field,
      image: 'https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60', 
    )

    Enrollment.create(
      role: @roles.sample,
      user_id: @user.id,
      course_id: @course.id
    )
  end
end

Course.all.each do |c|
  puts "Title: #{c.title}"
  puts "Desc: #{c.desc}"
  puts "Type: #{c.ctype}"
  puts 
end

User.all.each do |u|
  puts "First: #{u.first}"
  puts "Last: #{u.last}"
  puts 
end