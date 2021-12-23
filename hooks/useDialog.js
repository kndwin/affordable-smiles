import { useEffect, useState } from "react";

import create from 'zustand'

export const useDialog = create(set => ({
  open: false,
	setOpen: () => set(({ open }) => ({ open: open })),
	content: null,
	setContent: () => set(({ content }) => ({ content: content }))
}))
