import { headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { SubmitButton } from '@/components/SubmitButton';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
} from '@mui/joy';
import { Drafts } from '@mui/icons-material';

export default function VerifyEmail({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <Stack
      height="100%"
      bgcolor="background.surface"
      p={4}
      justifyContent="center">
      <Stack gap={3} alignItems="center">
        <Drafts sx={{ fontSize: '56px' }} color="primary" />

        <Typography level="title-lg" textAlign="center">
          Almost There! Swing by Your Inbox to Find Our Verification Email. A
          Quick Click and You're All Set to Unlock the Full SmartSweat
          Experience!
        </Typography>
      </Stack>
    </Stack>
  );
}
