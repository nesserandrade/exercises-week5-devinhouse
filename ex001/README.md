## VAR

Antes do ES6, as var dominavam a linguagem Javascript. Todas as variáveis eram declaradas como var. Porém existem problemas em declarar tudo como var, por isso os novos tipos de variáveis apareceram.

Variáveis var são globais. Elas só são locais quando declaradas dentro de funções. Em qualquer outro escopo, a var causa hoiisting e se torna global.

VAR pode ser redeclarada e atualizada.

## LET

Let são variáveis locais, elas funcionam dentro do escopo em que são declaradas, mesmo sendo no global.
Let também pode ser redeclarada e atualizada.

## CONST

const são variáveis locais assim como let, funcionando da mesma forma.
const não pode ser redeclarada, porém pode ser atualizada em algumas situações.

## Classes

Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

### Definindo classes

As Classes são, de fato, "funções especiais", e, assim como você pode definir "function expressions" e "function declarations", a sintaxe de uma classe possui dois componentes: "class expressions" e  "class declarations".