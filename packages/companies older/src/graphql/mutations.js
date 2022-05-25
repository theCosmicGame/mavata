/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createFirm = /* GraphQL */ `
  mutation CreateFirm(
    $input: CreateFirmInput!
    $condition: ModelFirmConditionInput
  ) {
    createFirm(input: $input, condition: $condition) {
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
export const updateFirm = /* GraphQL */ `
  mutation UpdateFirm(
    $input: UpdateFirmInput!
    $condition: ModelFirmConditionInput
  ) {
    updateFirm(input: $input, condition: $condition) {
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
export const deleteFirm = /* GraphQL */ `
  mutation DeleteFirm(
    $input: DeleteFirmInput!
    $condition: ModelFirmConditionInput
  ) {
    deleteFirm(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
