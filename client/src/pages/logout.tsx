import React from "react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { clearUserState } from "../redux/user/userSlice";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
export const Logout = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    setIsOpen(false);
    dispatch(clearUserState());
    navigate("/");
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Logout
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onLogout} ml={3}>
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};