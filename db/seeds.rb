@ctypes = ['Cooking', 'CS', 'Math', 'Writing']
Course.delete_all 

10.times do
  Course.create(
    title: Faker::Educator.course_name,
    desc: Faker::Lorem.paragraph,
    ctype: @ctypes.sample
  )
end

Course.all.each do |c|
  puts "Title: #{c.title}"
  puts "Desc: #{c.desc}"
  puts "Type: #{c.ctype}"
  puts 
end