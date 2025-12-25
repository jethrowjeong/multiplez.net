'use client';

import { Container, Title, Text, Button, Group, Badge, Box, Grid } from '@mantine/core';
import { IconArrowRight, IconCheckbox, IconPlayerPlay } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
    return (
        <Box
            component="section"
            h={{ base: 'auto', md: '100vh' }}
            py={{ base: 60, md: 0 }}
            bg="navy.9"
            style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background "Digital Grid/Globe" Effect */}
            <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4, zIndex: 0 }}></div>

            {/* Glowing Orbs */}
            <div style={{ position: 'absolute', top: '10%', right: '10%', width: 500, height: 500, background: '#ffd028', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.1, zIndex: 0 }}></div>

            <Container size="xl" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <Grid gutter={{ base: 30, md: 50 }} align="center">
                    {/* Left: Content */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Badge
                                size="lg"
                                variant="outline"
                                color="brand.5" // Yellow
                                radius="md"
                                leftSection={<IconCheckbox size={14} />}
                                styles={{ root: { textTransform: 'none', borderWidth: 1, color: '#ffd028' } }}
                                mb="xl"
                            >
                                선정된 스타트업에 투자 유치까지 지원
                            </Badge>

                            <Title
                                order={1}
                                mb="md"
                                c="white"
                                style={{
                                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                    lineHeight: 1.2,
                                    fontFamily: 'Pretendard, sans-serif'
                                }}
                            >
                                <span style={{ color: '#d4af37' }}>미국 시장, 정말 먹힐까?</span><br />
                                그 답을 60일 만에<br />
                                알 수 있습니다.
                            </Title>

                            <Text c="dimmed" size="xl" maw={600} mb="xl" style={{ lineHeight: 1.6 }}>
                                대표님은 제품에만 집중하세요.<br />
                                <strong>입점부터 선적, 계정 이슈 해결까지</strong> 저희가 직접 해결합니다.
                            </Text>

                            <Group gap="md">
                                <Button
                                    component="a"
                                    href="https://calendar.app.google/i8KX8FBx8tonpQmb7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="lg"
                                    h={{ base: 'auto', sm: 54 }}
                                    py={{ base: 'sm', sm: 0 }}
                                    px={32}
                                    radius="md"
                                    color="brand.5"
                                    c="navy.9"
                                    fw={700}
                                    fz="lg"
                                    rightSection={<IconArrowRight size={20} />}
                                    className="button-glow"
                                    style={{ whiteSpace: 'normal' }}
                                >
                                    불안을 확신으로 바꾸는 방법 알아보기
                                </Button>
                                <Button
                                    component="a"
                                    href="https://www.youtube.com/@JethrowJeong"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="lg"
                                    variant="outline"
                                    radius="md"
                                    color="gray.5"
                                    c="white"
                                    fw={600}
                                    leftSection={<IconPlayerPlay size={20} />}
                                    styles={{ root: { height: 50, borderWidth: 1 } }}
                                >
                                    서비스 소개 영상
                                </Button>
                            </Group>
                            <Text size="sm" c="dimmed" mt="xs" mb="lg">
                                상담은 무료입니다. 약속은 진심입니다.
                            </Text>

                            <Group mt="xl" align="center" gap="xs">
                                <Box
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        backgroundColor: '#ffd028',
                                        boxShadow: '0 0 10px #ffd028'
                                    }}
                                />
                                <Text c="dimmed" size="sm">현재 13팀 검증 진행 중</Text>
                            </Group>
                        </motion.div>
                    </Grid.Col>

                    {/* Right: Visual Placeholder - "Globe/Data" */}
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Box
                                w="100%"
                                h={{ base: 300, md: 500 }}
                                style={{
                                    borderRadius: 30,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Box style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 0 }}>
                                    <Box
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '100%',
                                            height: '100%',
                                            maxWidth: 800,
                                            maxHeight: 800,
                                            opacity: 1, // Brighter
                                            mixBlendMode: 'lighten', // Holographic effect
                                            pointerEvents: 'none'
                                        }}
                                    >
                                        <Image
                                            src="/images/hero-globe.png"
                                            alt="Global Operations"
                                            fill
                                            style={{
                                                objectFit: 'contain',
                                                // Fade out edges for "blend in" effect
                                                maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                                                WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)'
                                            }}
                                            priority
                                        />
                                    </Box>
                                </Box>

                                <Box
                                    style={{
                                        position: 'absolute',
                                        bottom: 30,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'rgba(0,0,0,0.6)',
                                        padding: '10px 20px',
                                        borderRadius: 20,
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(5px)',
                                        zIndex: 2
                                    }}
                                >
                                    <Text c="brand.5" size="sm" fw={700} ta="center" style={{ letterSpacing: 1 }}>GO TO MARKET EXPERT</Text>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}
