# D-Bot Database

This should only be used for D-Bot projects.

## The problem with prisma

I still a bit liking ORM for Discord.JS bots (as the guide recommends one, but I'm using Prisma here) but I want to share schema of Prisma for projects outside Discord.JS bot but still within the same project, like a web interface.

Solution exists like [this](https://github.com/MarcMogdanz/typed-prisma-package) and [this](https://isidoro-ferreiro.medium.com/share-your-prisma-client-across-projects-44d1c7aca6fd), but those requiring the .env file to be public which is not what I want.

The solution is to use `gitt sparse-checkout` to get the schema.prisma file to generate between projects.