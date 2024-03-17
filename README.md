# User Invitations App

Link: <a href='https://levladik.github.io/react-user-list/' target='_blank'>User Invitations App</a>

This React application is designed to showcase a list of users with a search functionality. Users can be selected and invited, and a success screen is displayed when invitations are sent. Below are the key components of the application:

## Components

### `App.js`

- **State Hooks**: `users`, `invites`, `isLoading`, `searchValue`, and `success` are state variables used to manage the application's data and loading state.
- **Fetch Users**: Uses the `useEffect` hook to fetch user data from the [Reqres API](https://reqres.in/api/users) when the component mounts.
- **Handlers**: `onChangeSearchValue` handles changes in the search input, and `onClickInvite` and `onClickSendInvites` handle user invitation actions.
- **Conditional Rendering**: Displays the `Success` component if invitations are sent successfully; otherwise, renders the `Users` component with user data.

### `Users.js`

- **Props**: Receives props such as `items` (users data), `isLoading`, `searchValue`, `onChangeSearchValue`, `invites`, `onClickInvite`, and `onClickSendInvites`.
- **Search Bar**: Renders a search bar that allows users to filter the list based on name or email.
- **Loading Skeleton**: Displays a loading skeleton when user data is still being fetched.
- **Users List**: Maps through the user data, applies search filtering, and renders the `User` component for each user.
- **Send Invitations Button**: Displays a "Send Invitations" button when there are selected invites.

### `User.js`

- **Props**: Receives user data and handlers such as `onClickInvite` and `isInvited`.
- **User Card**: Renders a user card with user details and an invite button.
- **Invite Button**: Displays an "Invite" button that triggers the `onClickInvite` handler when clicked.

### `Success.js`

- **Props**: Receives the `count` of successfully sent invitations.
- **Success Screen**: Renders a success screen with a message indicating the number of invitations successfully sent.

## How to Run

1. Ensure you have Node.js and npm installed on your machine.
2. Clone the repository:

   ```bash
   git clone https://github.com/levladik/React_user-list.git
   ```

3. Navigate to the project directory:

   ```bash
   cd React_user-list
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Run the application:

   ```bash
   npm start
   ```
