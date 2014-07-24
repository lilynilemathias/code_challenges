files = [File.open('tweets_aa', 'r'), File.open('tweets_ab', 'r'), File.open('tweets_ac', 'r')]

def counter(files)
  result = {"Manhattan" => 0, "Brooklyn" => 0, "Queens" => 0, "Bronx" => 0, "Staten Island" => 0}
  files.each do |f|
    f.readlines.each do |line|
      borough, message = line.split("\t")
      result[borough] += 1 if message.downcase.include?("knicks")
    end
  end
  return result
end

puts counter(files)
