import command from '../../config.json' assert {type: 'json'};

const createSkills = () : string[] => {
  let string = "";
  const skills : string[] = [];
  const files = `${command.skills.length} skills`;
  const SPACE = "&nbsp;";

  skills.push("<br>")

  command.skills.forEach((ele) => {
   

    string += SPACE.repeat(2);   
  
    string += ele[0];
    skills.push(string);
    string = '';
  });

  skills.push("<br>");
  skills.push(files);
  skills.push("<br>");
  return skills
}

export const SKILLS = createSkills()
