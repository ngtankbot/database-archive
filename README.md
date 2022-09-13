# D-Bot Database

This should only be used for D-Bot projects.

## Licensing

Since there is no package.json, this project is under `GPL-3.0-or-later`. (yes it's stupid to use gpl here but who cares)

## The problem with prisma

I still a bit liking ORM for Discord.JS bots (as the guide recommends one, but I'm using Prisma here) but I want to share schema of Prisma for projects outside Discord.JS bot but still within the same project, like a web interface.

Solution exists like [this](https://github.com/MarcMogdanz/typed-prisma-package) and [this](https://isidoro-ferreiro.medium.com/share-your-prisma-client-across-projects-44d1c7aca6fd), but those requiring the .env file to be public which is not what I want.

The solution is to use another project to submodule in, much easier and better imo.