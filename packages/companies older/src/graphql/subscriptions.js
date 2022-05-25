/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
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
