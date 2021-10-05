
const getRepos = require('../problema/4-fetch');

test('faça um teste que verifique que os repositórios "sd-01-week4-5-project-todo-list" e "sd-01-week4-5-project-meme-generator" se encontram na lista', async () => {
  
    const repositorios = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(repositorios).toContain("sd-01-week4-5-project-todo-list");
    expect(repositorios).toContain("sd-01-week4-5-project-meme-generator");
});