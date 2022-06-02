/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFirm = /* GraphQL */ `
  subscription OnCreateFirm {
    onCreateFirm {
      id
      name
      users {
        items {
          id
          email
          name
          profession
          isExternal
          createdAt
          updatedAt
          firmUsersId
        }
        nextToken
      }
      companies {
        items {
          id
          name
          serviceProvider
          website
          description
          headquarters
          createdAt
          updatedAt
          firmCompaniesId
          userAdminRolesId
          userHasRolesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFirm = /* GraphQL */ `
  subscription OnUpdateFirm {
    onUpdateFirm {
      id
      name
      users {
        items {
          id
          email
          name
          profession
          isExternal
          createdAt
          updatedAt
          firmUsersId
        }
        nextToken
      }
      companies {
        items {
          id
          name
          serviceProvider
          website
          description
          headquarters
          createdAt
          updatedAt
          firmCompaniesId
          userAdminRolesId
          userHasRolesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFirm = /* GraphQL */ `
  subscription OnDeleteFirm {
    onDeleteFirm {
      id
      name
      users {
        items {
          id
          email
          name
          profession
          isExternal
          createdAt
          updatedAt
          firmUsersId
        }
        nextToken
      }
      companies {
        items {
          id
          name
          serviceProvider
          website
          description
          headquarters
          createdAt
          updatedAt
          firmCompaniesId
          userAdminRolesId
          userHasRolesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      name
      firm {
        id
        name
        users {
          nextToken
        }
        companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      profession
      isExternal
      adminRoles {
        items {
          id
          name
          serviceProvider
          website
          description
          headquarters
          createdAt
          updatedAt
          firmCompaniesId
          userAdminRolesId
          userHasRolesId
        }
        nextToken
      }
      hasRoles {
        items {
          id
          name
          serviceProvider
          website
          description
          headquarters
          createdAt
          updatedAt
          firmCompaniesId
          userAdminRolesId
          userHasRolesId
        }
        nextToken
      }
      createdAt
      updatedAt
      firmUsersId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      name
      firm {
        id
        name
        users {
          nextToken
        }
        companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      profession
      isExternal
      adminRoles {
        items {
          id
          name
          serviceProvider
          website
          description
          headquarters
          createdAt
          updatedAt
          firmCompaniesId
          userAdminRolesId
          userHasRolesId
        }
        nextToken
      }
      hasRoles {
        items {
          id
          name
          serviceProvider
          website
          description
          headquarters
          createdAt
          updatedAt
          firmCompaniesId
          userAdminRolesId
          userHasRolesId
        }
        nextToken
      }
      createdAt
      updatedAt
      firmUsersId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      name
      firm {
        id
        name
        users {
          nextToken
        }
        companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      profession
      isExternal
      adminRoles {
        items {
          id
          name
          serviceProvider
          website
          description
          headquarters
          createdAt
          updatedAt
          firmCompaniesId
          userAdminRolesId
          userHasRolesId
        }
        nextToken
      }
      hasRoles {
        items {
          id
          name
          serviceProvider
          website
          description
          headquarters
          createdAt
          updatedAt
          firmCompaniesId
          userAdminRolesId
          userHasRolesId
        }
        nextToken
      }
      createdAt
      updatedAt
      firmUsersId
    }
  }
`;
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
      id
      createdBy {
        id
        email
        name
        firm {
          id
          name
          createdAt
          updatedAt
        }
        profession
        isExternal
        adminRoles {
          nextToken
        }
        hasRoles {
          nextToken
        }
        createdAt
        updatedAt
        firmUsersId
      }
      admin {
        id
        email
        name
        firm {
          id
          name
          createdAt
          updatedAt
        }
        profession
        isExternal
        adminRoles {
          nextToken
        }
        hasRoles {
          nextToken
        }
        createdAt
        updatedAt
        firmUsersId
      }
      name
      serviceProvider
      website
      description
      headquarters
      createdAt
      updatedAt
      firmCompaniesId
      userAdminRolesId
      userHasRolesId
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
      id
      createdBy {
        id
        email
        name
        firm {
          id
          name
          createdAt
          updatedAt
        }
        profession
        isExternal
        adminRoles {
          nextToken
        }
        hasRoles {
          nextToken
        }
        createdAt
        updatedAt
        firmUsersId
      }
      admin {
        id
        email
        name
        firm {
          id
          name
          createdAt
          updatedAt
        }
        profession
        isExternal
        adminRoles {
          nextToken
        }
        hasRoles {
          nextToken
        }
        createdAt
        updatedAt
        firmUsersId
      }
      name
      serviceProvider
      website
      description
      headquarters
      createdAt
      updatedAt
      firmCompaniesId
      userAdminRolesId
      userHasRolesId
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
      id
      createdBy {
        id
        email
        name
        firm {
          id
          name
          createdAt
          updatedAt
        }
        profession
        isExternal
        adminRoles {
          nextToken
        }
        hasRoles {
          nextToken
        }
        createdAt
        updatedAt
        firmUsersId
      }
      admin {
        id
        email
        name
        firm {
          id
          name
          createdAt
          updatedAt
        }
        profession
        isExternal
        adminRoles {
          nextToken
        }
        hasRoles {
          nextToken
        }
        createdAt
        updatedAt
        firmUsersId
      }
      name
      serviceProvider
      website
      description
      headquarters
      createdAt
      updatedAt
      firmCompaniesId
      userAdminRolesId
      userHasRolesId
    }
  }
`;
