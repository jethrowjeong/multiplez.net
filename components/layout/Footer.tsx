'use client';

import { Container, Group, Text, Box } from '@mantine/core';

export function Footer() {
    return (
        <Box component="footer" py="xl" bg="dark.9" style={{ borderTop: '1px solid #333' }}>
            <Container size="xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <Text fw={700} size="lg" c="dimmed">Multiplez</Text>
                    <div className="flex gap-2">
                        <Text size="sm" c="dimmed">© 2025 Multiplez. All rights reserved.</Text>
                    </div>
                </div>
            </Container>
        </Box>
    );
}
