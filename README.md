# Reactivities

A complete social network coded in .Net and React.

<div>
  <img src="https://user-images.githubusercontent.com/58491622/224570668-ac0ae2d3-0295-4d3a-aa82-fe10e9432909.png" alt="Home" />
  <img src="https://user-images.githubusercontent.com/58491622/224570889-83bfd8ea-f6ea-427f-9ae8-46b8139beffc.png" alt="list activities" />
  <img src="https://user-images.githubusercontent.com/58491622/224570934-fb7dfb19-6975-4731-8a31-97a9ca3acad6.png" alt="view acitivy" />
  <img src="https://user-images.githubusercontent.com/58491622/224571753-cdfcd565-eb2e-4275-8596-5421064c5f54.png" alt="create activity"  />               
</div>


The intent of this project is to follow the most recommended way to build a complex system. So it was built following SOLID principles and Clean Architecture, aiming to have a scalable, maintainable, and testable codebase. The communication between layers is handled by the Mediator pattern, which centralizes requests and decouples components, leading to a better separation of concerns and more organized code.

## NuGet Packages

- Microsoft.EntityFrameworkCore.Sqlite
- MediatR
- AutoMapper.Extensions.Microsoft.DependencyInjection
- Microsoft.EntityFrameworkCore.SqLite
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.OpenApi
- Microsoft.EntityFrameworkCore.SqLite
- FluenValidation.AspNetCore

## Entity Framework commands

- dotnet ef migrations add InitialCreate -s API/ -p Persistence/

## React packages

- [Axios](https://axios-http.com/ptbr/docs/intro) - http requests
- [React.semantic-ui](https://react.semantic-ui.com) - semantic code
- [Formik](https://formik.org/) - better way to handle form
- [MobX](https://mobx.js.org/README.html) - to handle state between components
- [React-Router](https://reactrouter.com/en/main) - to manage pages

In Progress...
